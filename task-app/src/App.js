
import './App.css';
import { Planlist } from './Planlist';

export default function App(){
  const data = [
    {
      plan:"FREE",
     price:0, 
     feature1:"Single User", acces1: "✔",
     feature2:"5GB Storage", acces2: "✔",
     feature3:"Unlimited Public Projects", acces3: "✔",
     feature4:"Community Access", acces4: "✔",
     feature5:"Unlimited Private Projects", acces5: "❌",
     feature6:"Dedicated Phone Support", acces6: "❌",
     feature7:"Free Subdomain", acces7: "❌",
     feature8:"Monthly Status Reports", acces8: "❌"
    },
    {
      plan:"PLUS",
     price:9,
     feature1:"5 Users", acces1: "✔",
     feature2:"50GB Storage", acces2: "✔",
     feature3:"Unlimited Public Projects", acces3: "✔",
     feature4:"Community Access", acces4: "✔",
     feature5:"Unlimited Private Projects", acces5: "✔",
     feature6:"Dedicated Phone Support", acces6: "✔",
     feature7:"Free Subdomain", acces7: "✔",
     feature8:"Monthly Status Reports", acces8: "❌"
    },
    {
      plan:"PRO",
     price:49,
     feature1:"Unlimited Users", acces1: "✔",
     feature2:"150GB Storage", acces2: "✔",
     feature3:"Unlimited Public Projects", acces3: "✔",
     feature4:"Community Access", acces4: "✔",
     feature5:"Unlimited Private Projects", acces5: "✔",
     feature6:"Dedicated Phone Support", acces6: "✔",
     feature7:"Unlimited Free Subdomains", acces7: "✔",
     feature8:"Monthly Status Reports", acces8: "✔"
     }
  ];
 const tick = "✔";
 const cross ="❌";

 return (
   <div className = "plan">
     {data.map((props)=>(
       <Planlist
      plan ={props.plan}
      price ={props.price}
      feature1 ={props.feature1} acces1={props.acces1}
      feature2 ={props.feature2} acces2={props.acces2}
      feature3 ={props.feature3} acces3={props.acces3}
      feature4 ={props.feature4} acces4={props.acces4}
      feature5 ={props.feature5} acces5={props.acces5}
      feature6 ={props.feature6} acces6={props.acces6}
      feature7 ={props.feature7} acces7={props.acces7}
      feature8 ={props.feature8} acces8={props.acces8}/>
     ))}
   </div>
 )

}


