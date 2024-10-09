import { HomeContainer } from "./home_header_styles";

import mainIMG from '../../../../assets/imagem.png';
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function HomePageHeader() {
    return (
        <HomeContainer>
            <div>
                <div className="description">
                    <div className="title">
                        <h1>Encontre o café perfeito para qualquer hora do dia!</h1>
                        <p>Com o Coffee Shop você recebe seu café aonde estiver, a qualquer hora</p>
                    </div>
                    
                    <div className="main">
                        <div className="x1">
                            <div id="x1">
                                <span>
                                    <ShoppingCart size={24}/>
                                </span>
                                Compra simples e segura
                            </div>

                            <div id="x2">
                                <span >
                                    <Timer size={24} />
                                </span>
                                Entrega rápida e rastreada
                            </div>
                        </div>
                        <div className="x2">
                            <div id="x3">
                                <span>
                                    <Package size={24} />
                                </span>
                                Embalagem mantém o café intacto
                            </div>

                            <div id="x4">
                                <span>
                                    <Coffee size={24} />
                                </span>
                                o café chega fresquinho até você
                            </div>
                        </div>
                    </div>
                </div>
                <div id="img">
                    <img src={mainIMG} />
                </div>
            </div>
        </HomeContainer>
    )
}