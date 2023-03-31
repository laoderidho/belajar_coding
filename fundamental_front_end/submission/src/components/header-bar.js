class HeaderBar extends HTMLElement{
     connectedCallback(){

        this.render()
     }

     render(){
        this.innerHTML = `
                    <style>
                        header{
                            width: 100%;
                            height: 100vh;
                        }

                        nav{
                            display: flex;
                            justify-content: space-between;
                        }

                        .opacity{
                            background: rgb(0 0 0 / 40%);
                            position: absolute;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            left: 0;
                        }


                        .logo > h1{
                            color: red;
                            font-size: 40px;
                            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
                            margin: 30px;
                        }

                        .item {
                            position: absolute;
                            bottom: 50%;
                            left: 20%;
                            top: 50%;
                            animation: itemAnimate 1s forwards ease;
                        }

                        .item>h1 {
                            color: white;
                            font-size: 50px;
                            margin-bottom: 15px;
                            font-weight: bold;
                        }

                        .item > h2{
                            color: white;
                            margin-bottom: 15px;
                            text-align: center;
                        }

                        .item > h1 , .item > h2{
                            animation: headerAnimate 1s forwards;
                        }

                        .item > a{
                            text-decoration: none;
                            margin-left: 40%;
                            background-color: red;
                            color: white;
                            padding: 8px;
                            font-size: 150%;
                            font-weight: bold;
                            border-radius: 5px;
                            transition: .5s;
                        }

                        .item > a:hover{
                            background-color: #b71c1c;
                        }


                        @keyframes itemAnimate{
                            from{
                                position: absolute;
                                left: 0;
                            }
                            to{}
                        }

                        @keyframes headerAnimate{
                            from{
                                opacity: 0;
                            }
                            to{opacity: 1;}
                        }

                        @media  only screen and (max-width: 745px) {
                                nav{
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                }

                                .item>form input[type=text]{
                                    margin-left: 0;
                                    font-size: 15px;
                                    padding: 3px;
                                    opacity: 1;
                                }

                                .logo > h1{
                                    font-size: 35px;
                                }
                                .item > h1{
                                    font-size: 35px;
                                }
                                .item> h2{
                                    text-align: left;
                                }
                                .item>a{
                                    margin-left: 60px;
                                }
                            }
                    </style>
                        <header>   
                            <div class="opacity">
                                <nav>
                                    <div class="logo">
                                        <h1>Fahreza Film</h1>
                                    </div>
                                </nav>
                                <div class="item">
                                    <h1>Tontonlah Film Kesukaan Mu</h1>
                                    <h2>Di Mana saja,  dan Kapan Saja Tanpa pergi Ke Bioskop</h2>
                                    <a href="#film"> <i class="fas fa-film"></i>Film</a>
                                </div>
                            </div>
                        </header>`;
     }
}

customElements.define('header-bar', HeaderBar)