import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles



  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={""}style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)",
        backgroundImage:"/trade4.jpg" }}>

      <br-x/>
      <div style={{width:"100%" , height:50 , backgroundColor:"#3c5b6f" , borderRadius:30,
       }}>
        <div style={{alignItems:"right",position:'relative',top:'30px',right:'300px'}}><img src='/cryptocurrency (4).png'/></div>
        <h1 style={{textAlign:"center",position:'relative',top:'-56px',fontWeight:"900", fontSize:17}}>قیمت لحظه ای تتر(دلار) / 
          Tether (USDT)
        </h1>
        
      </div>

      

    

     <br-x/>

     <div style={{width:"100%" , height:300 , backgroundColor:"#3c5b6f" , borderRadius:30,
      textAlign:"right",padding:30
     }}>

      <div>
      
    
      
      <br-xx/>
      لحظه ای: {(props.p.price as number).toLocaleString("fa-IR")}
      <br-x/>
      تغییرات ۲۴ ساعت : ٪ {(props.p.diff24d as number).toLocaleString("fa-IR")}
      <br-x/>
      تغییرات هفتگی: ٪ {(props.p.diff7d as number).toLocaleString("fa-IR")}
      <br-x/>
      تغییرات ماهانه: ٪ {(props.p.diff30d as number).toLocaleString("fa-IR")}




     </div>

      <br/>
      <hr style={{color:"#948979"}}></hr>
      <br/>
      


     <div style={{textAlign:"left"}}>
      
      <br-xx/>
      Live : {props.p.price}
      <br-x/>
      % 24hours :{props.p.diff24d} 
      <br-x/>
      % 7days :  {props.p.diff7d} 
      <br-x/>
      % 30days :  {props.p.diff30d} 




     </div>

     </div>
     

    

     <br-x/>
     <br-x/>

      <center style={{fontSize:10}}>
       تهیه شده توسط تیم پژوهشی  blackband
      </center>

      <br-x/>
      <br-x/>

      </Window>

     
    </div>

     
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p= data.data.currencies.USDT

    console.log("PRICEEEEEEEEEEEEEEEEEEEEEEEEEEE:",p)
  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}