import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./Items";
import Categories from "./Categories";
import ShowFullitem from "./ShowFullitem";

class App extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      orders:[],
      currentItems: [],
      items: [
        {
          id:1,
          title: "Sessel blau",
          img: "sessel1.jpg",
          description: "Gemütlicher blauer Sessel aus Samt",
          category: "sessel",
          price: "120"
        },
        {
          id:2,
          title: "Sessel orange",
          img: "sessel2.jpg",
          description: "Akzent-Sessel für modernen Raum ",
          category: "sessel",
          price: "150"
        },
        {
          id:3,
          title: "Sessel beige",
          img: "sessel3.jpg",
          description:  "Edle Klassik für ihr Wohnzimmer",
          category: "sessel",
          price: "180"
        },
        {
          id:4,
          title: "Konsolentisch beige",
          img: "console1.jpg",
          description: "Akazien-Konsolentisch",
          category: "konsolentisch",
          price: "120"
        },
        {
          id:5,
          title: "Konsolentisch dunkel",
          img: "console2.jpg",
          description: "Konsolentisch aus Buchenholz",
          category: "konsolentisch",
          price: "160"
        },
        {
          id: 6,
          title: "Konsolentisch grau",
          img: "console3.jpg",
          description: "Konsolentisch aus Eichenholz",
          category: "konsolentisch",
          price: "200"
        },
        {
          id:7,
          title: "Sofa beige",
          img: "sofa1.jpg",
          description: "Gemütliches Sofa klassischer Design",
          category: "sofa",
          price: "200"
        },
        {
          id:8,
          title: "Sofa hellblau",
          img: "sofa2.jpg",
          description: "Sofa für modernes Wohnzimmer",
          category: "sofa",
          price: "210"
        },
        {
          id:9,
          title: "Sofa grau-blau",
          img: "sofa3.jpg",
          description: "praktisches Sofa für jeden Raum",
          category: "sofa",
          price: "200"
        },
       
      ],
      showFullitem: false,
      fullItem: {}
    }
    this.state.currentItems= this.state.items;
    this.addToOrder= this.addToOrder.bind(this);
    this.deleteOrder= this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
    return (
    <div className="wrapper">
     <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
     <Categories chooseCategory={this.chooseCategory}/>
     <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd= {this.addToOrder}/>
     {this.state.showFullitem && <ShowFullitem onAdd= {this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
     <Footer/>
    </div>
    );
  } 
  onShowItem(item){
    this.setState({fullItem : item})
    this.setState({showFullitem: !this.state.showFullitem})
  }
  chooseCategory(category) {
    if(category==="alle"){
      this.setState({currentItems : this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  addToOrder (item){
    let isInArray =false;
    this.state.orders.forEach(el => {
      if (el.id===item.id){
        isInArray = true;
      }
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
  deleteOrder(id){
    this.setState({orders:this.state.orders.filter(el => el.id !==id)})
  }
}

export default App;