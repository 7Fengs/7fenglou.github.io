const urls=['https://7fl.icu1','https://7fl.one','https://7fl.buzz'];
const email='7fenglou@gmail.com';const delaySeconds=5;class App extends React.Component{urlSuffix='';state={delaySeconds:delaySeconds};constructor(){super();const hash=window.location.hash.replace(/^#/,'');this.urlSuffix=hash+window.location.search;}
    componentDidMount=()=>{setTimeout(()=>{this.delayRedirect();},0);};delayRedirect=()=>{if(this.state.delaySeconds>0){setTimeout(()=>{this.setState({delaySeconds:this.state.delaySeconds-1,},()=>{this.delayRedirect();});},1000);}else{this.redirect();}};redirect=()=>{const url=urls[Math.floor(Math.random()*urls.length)];window.location.href=this.paramedUrl(url);};paramedUrl=(url)=>{return url+this.urlSuffix;};render(){return(<div style={{margin:'0 auto',textAlign:'center',paddingTop:'px',color:'#666',maxWidth:'500px',minHeight:'450px',backgroundColor:'#fff',padding:'40px',}}><div style={{fontSize:'25px',marginBottom:'20px',}}><span style={{color:'#fff',background:'#ff3399',padding:'2px 7px',borderRadius:'5px',fontWeight:'bold',}}>栖凤楼</span></div><div style={{fontSize:'16px',fontWeight:'bold',marginBottom:'10px',color:'#333',}}>最新地址</div>{urls.map((url)=>{return(<div style={{margin:'8px 0',}}><a href={this.paramedUrl(url)}style={{color:'inherit',textDecoration:'none'}}>{url}</a></div>)})}<button className='Btn'onClick={this.redirect}style={{margin:'16px 0',fontSize:'16px',color:'#fff',backgroundColor:'#ff3399',border:'none',padding:'7px 30px',borderRadius:'5px',}}>立即进入({this.state.delaySeconds})</button><div style={{margin:'5px'}}>您可以收藏本页，方便下次浏览进入。<br />发邮件到<span style={{margin:'5px',color:'#771329'}}>{email}</span>随时获取最新地址</div></div>)}}
ReactDOM.render(<App/>,document.getElementById('root'));
