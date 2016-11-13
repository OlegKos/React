import React from 'react';
import ReactDOM from 'react-dom';




let webDesignObj =[
    {id:1,img:"Image/projects/WebDesign/design_1.png",rating:12,name:"Claritas Etiam Processus",description:"Graphic Design, Alice Brook"},
    {id:2,img:"Image/projects/WebDesign/design_2.png",rating:5,name:"Claritas Etiam Processus",description:"Graphic Design, Alice Brook"},
    {id:3,img:"Image/projects/WebDesign/design_3.png",rating:1224,name:"Claritas Etiam Processus",description:"Graphic Design, Alice Brook"},
    {id:4,img:"Image/projects/WebDesign/design_4.png",rating:6,name:"Claritas Etiam Processus",description:"Graphic Design, Alice Brook"},
    {id:5,img:"Image/projects/WebDesign/design_5.png",rating:8,name:"Claritas Etiam Processus",description:"Graphic Design, Alice Brook"},
    {id:6,img:"Image/projects/WebDesign/design_6.png",rating:14,name:"Claritas Etiam Processus",description:"Graphic Design, Alice Brook"}],
     mobilAppObj =[
    {id:1,img:"Image/projects/MobilApp/mobil_1.png",rating:12,name:"Claritas Etiam Processus",description:"Mobil app, Waxom group"},
    {id:2,img:"Image/projects/MobilApp/mobil_2.png",rating:5,name:"Claritas Etiam Processus",description:"Mobil app, Waxom group"},
    {id:3,img:"Image/projects/MobilApp/mobil_3.png",rating:1224,name:"Claritas Etiam Processus",description:"Mobil app, Waxom group"}],
     illustrationObj=[
    {id:1,img:"Image/projects/illustrator/illustr_1.png",rating:12,name:"Claritas Etiam Processus",description:"Illustrator, Kile Bring"},
    {id:2,img:"Image/projects/illustrator/illustr_2.png",rating:5,name:"Claritas Etiam Processus",description:"Illustrator, Kile Bring"},
    {id:3,img:"Image/projects/illustrator/illustr_3.png",rating:1224,name:"Claritas Etiam Processus",description:"Illustrator, Kile Bring"},
    {id:4,img:"Image/projects/illustrator/illustr_4.png",rating:6,name:"Claritas Etiam Processus",description:"Illustrator, Kile Bring"},
    {id:5,img:"Image/projects/illustrator/illustr_5.png",rating:8,name:"Claritas Etiam Processus",description:"Illustrator, Kile Bring"},
    {id:6,img:"Image/projects/illustrator/illustr_6.png",rating:14,name:"Claritas Etiam Processus",description:"Illustrator, Kile Bring"}],
     photographyObj=[
    {id:1,img:"Image/projects/Photography/photo_1.png",rating:12,name:"Claritas Etiam Processus",description:"Photography, Ivor Grill"},
    {id:2,img:"Image/projects/Photography/photo_2.png",rating:5,name:"Claritas Etiam Processus",description:"Photography, Ivor Grill"},
    {id:3,img:"Image/projects/Photography/photo_3.png",rating:1224,name:"Claritas Etiam Processus",description:"Photography, Ivor Grill"},
    {id:4,img:"Image/projects/Photography/photo_4.png",rating:6,name:"Claritas Etiam Processus",description:"Photography, Ivor Grill"},
    {id:5,img:"Image/projects/Photography/photo_5.png",rating:8,name:"Claritas Etiam Processus",description:"Photography, Ivor Grill"},
    {id:6,img:"Image/projects/Photography/photo_6.png",rating:14,name:"Claritas Etiam Processus",description:"Photography, Ivor Grill"},
    {id:7,img:"Image/projects/Photography/photo_7.png",rating:15,name:"Claritas Etiam Processus",description:"Photography, Ivor Grill"},
    {id:8,img:"Image/projects/Photography/photo_8.png",rating:18,name:"Claritas Etiam Processus",description:"Photography, Ivor Grill"},
    {id:9,img:"Image/projects/Photography/photo_9.png",rating:76,name:"Claritas Etiam Processus",description:"Photography, Ivor Grill"}];
    


    class Examples extends React.Component {
        render() {
            return (<div className="examples-bg col-4 col-s-6"><a href="#">
                <div className="examples"><img src={this.props.img} /></div>
                <div className="example-description"><h2>{this.props.name}</h2><h3>{this.props.descrip}</h3></div>
                </a>
                </div>);
        }
    };

    class Projects extends React.Component{

        constructor(){
            super();

            
            this.allProjectObj=[];
            this.allProjectObj=this.allProjectObj.concat(webDesignObj,mobilAppObj,illustrationObj,photographyObj);
            this.allProjectObj.map(function(el,i){ //give a new id to prevent React confusion with coincidence id
                el.id=++i;                
            });   
            this.allProjectObj=this.SortMass(this.allProjectObj);

            this.webDesignObj=this.SortMass(webDesignObj);

            this.mobilAppObj=this.SortMass(mobilAppObj);

            this.illustrationObj=this.SortMass(illustrationObj);

            this.photographyObj=this.SortMass(photographyObj);

            this.state ={showedMass:this.allProjectObj.slice(0,6), showedNum:6, fullMass:this.allProjectObj};
            
            
        }


        
        //change wich mass must be showed
        handle_ShowMass(mass,event){
            
            this.setState({showedMass:mass.slice(0,6), showedNum:6, fullMass:mass});
            document.getElementsByClassName("project-menu-active")[0].classList.remove("project-menu-active");
            event.target.classList.add("project-menu-active");

        }

        //sort by rating
        SortMass(mass) {
            mass.sort(function(a,b){return b.rating-a.rating});
            return mass;
        }

        handle_Load_more() {
           
            if((window.innerWidth<800)&(this.state.showedNum+2<=this.state.fullMass.length)){
                this.setState({showedMass:this.state.fullMass.slice(0,this.state.showedNum+2),showedNum:this.state.showedNum+2,fullMass:this.state.fullMass});
            }
            if((window.innerWidth>800)&(this.state.showedNum+3<=this.state.fullMass.length)){
                this.setState({showedMass:this.state.fullMass.slice(0,this.state.showedNum+3),showedNum:this.state.showedNum+3,fullMass:this.state.fullMass});
            }
            
           

        }


        
        render() {   
             
            return <div className="row">
             <div id="project-menu">
                <ul>
                    <li><button onClick={this.handle_ShowMass.bind(this,this.allProjectObj)} className="project-menu-active" >All</button></li>
                    <li><button onClick={this.handle_ShowMass.bind(this,this.webDesignObj)}>Web Design</button></li>
                    <li><button onClick={this.handle_ShowMass.bind(this,this.mobilAppObj)}>Mobil App</button></li>
                    <li><button onClick={this.handle_ShowMass.bind(this,this.illustrationObj)}>illustration</button></li>
                    <li><button onClick={this.handle_ShowMass.bind(this,this.photographyObj)}>Photography</button></li>
                </ul>
            </div>
            <div id="projects-area">
              {this.state.showedMass.map(function(el){
                 return <Examples key={el.id} cont={el.con} img={el.img} name={el.name} descrip={el.description}/>;
              })}
            </div>
            <div ><button id="load-more" onClick={this.handle_Load_more.bind(this)}>LOAD MORE</button></div>
            </div>;
        }
    }

     ReactDOM.render(
            <Projects  />,
            document.getElementById("latest-project-examples")
        );