import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { HomePage } from './pages/Home/home_index';
import { CartPage } from './pages/cart_checkout/cart_index';


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout /> }>
                <Route path='/' element={<HomePage />} />
                <Route path='/checkout' element={<CartPage />} />
            </Route>
        </Routes>
    )
}
