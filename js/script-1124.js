
//判断文本框
function onb_input(f)
{
	var oid=document.getElementById(f);
	oid.className="login_input01";
	if(oid.value == "")
	{
	oid.value="登录邮箱/手机号";
	}
	}
function onf_input(f2)
{
	var oid2=document.getElementById(f2);
	oid2.className="login_input02";
	if(oid2.value == "登录邮箱/手机号")
	{
	oid2.value="";
	}
}

function onb_input2(d)
{
	var oid=document.getElementById(d);
	oid.className="login_input03";
	if(oid.value == "")
	{
	oid.value="密码";
	}
	}
function onf_input2(d2)
{
	var oid2=document.getElementById(d2);
	oid2.className="login_input04";
	if(oid2.value == "密码")
	{
	oid2.value="";
	}
}
	
	function onb_input3(e)
{
	var oid=document.getElementById(e);
	//oid.className="login_input03";
	if(oid.value == "")
	{
	oid.value="请输入关键词";
	}
	}
	
	
function onf_input3(e2)
{
	var oid2=document.getElementById(e2);
	//oid2.className="login_input04";
	if(oid2.value == "请输入关键词")
	{
	oid2.value="";
	}
}

	function onb_input4(f)
{
	var oid=document.getElementById(f);
	//oid.className="login_input03";
	if(oid.value == "")
	{
	oid.value="输入城市名称";
	}
	}
function onf_input4(f2)
{
	var oid2=document.getElementById(f2);
	//oid2.className="login_input04";
	if(oid2.value == "输入城市名称")
	{
	oid2.value="";
	}
}

function onb_input5(g)
{
	var oid=document.getElementById(g);
	oid.className="m03r_input01";
	}
function onf_input5(g2)
{
	var oid2=document.getElementById(g2);
	oid2.className="m03r_input02";
}

//判断 搜索 下拉 框
function onc_sovalue(oval,osid,ora)
	  {
		  if(ora==1)
		  {
		  	var obj=document.getElementsByName("so_rad");
		  	for(i=0;i<obj.length;i++)
		  	{
			  if(obj[i].checked)
			  {
				  var otian=obj[i].value;
				  document.getElementById("so_sel0"+osid).value=otian+oval;
				  }
			  }
		  }
		  else
		  {
			   document.getElementById("so_sel0"+osid).value=oval;
		  }
		 document.getElementById("so_liapv0"+osid).style.display="none";
		 
	
	  }
		  
		   function onc_soapv(oinp,ev)
		 {
			 if(document.getElementById("so_liapv0"+oinp).style.display=="none")
			 {
				document.getElementById("so_liapv0"+oinp).style.display="block";
			 }
			else
			{
				document.getElementById("so_liapv0"+oinp).style.display="none";
			 } 
				
			 ev.stopPropagation() ;
			 var theId = "so_liapv0"+oinp ;
		 	$("#" + theId).click( function( ev ) { ev.stopPropagation() ; } ) ;
			 $(document).one("click", function() {  $("#" + theId).hide() ;  });


		 }
		  
		 // function onmo_soapv(omid)
//		 {
//			document.getElementById("so_liapv0"+omid).style.display="none";
//			 }
		// window.onload=function()
//		 {
//			 if(document.getElementById("so_liapv01").style.display == "block")
//			 {
//			document.body.onclick=function(){document.getElementById("so_liapv01").style.display="none";}
//			 }
//			 }

			 
//判断 登录 下拉 框
function onc_selvalue(sval,ssid)
	  {
		document.getElementById("sel0"+ssid).value=sval;
		document.getElementById("login_liapv0"+ssid).style.display="none";
	  }
function onc_loginapv(sinp)
{
	if(document.getElementById("login_liapv0"+sinp).style.display=="none")
	{
	  document.getElementById("login_liapv0"+sinp).style.display="block";
	  
	}
	else
	{
	  document.getElementById("login_liapv0"+sinp).style.display="none";
		}
		
}

//首页左上角 地区切换
function $2(id){return document.getElementById(id)}
function onc_diqu(dq)
{
	for(j=1;j<5;j++)
	if(j==dq)
	{
		$2("halc_te0"+j).style.display="block";
		$2("diqu_mti0"+j).className="halc_tilli";
		}
		else
		{
			$2("halc_te0"+j).style.display="none";
			$2("diqu_mti0"+j).className="";
			}
	}
function onc_dqlinme(dqname)
{
	$2("diqu_name").innerHTML=dqname;
	}
function onc_showdqapv()
{
	$2("head_apvlcid").style.display="block";
	}
function onc_hiddendqapv()
{
	$2("head_apvlcid").style.display="none";
	}
	
//放映时间页面 仿豆瓣网效果			 
function onm_showm02c(n)
		  {
			   for(j=1;j<5;j++)
			   {
				   if(j==n)
				   {
					   document.getElementById("fylt_apv0"+j).style.display="block";
					   document.getElementById("fylt_cw0"+j).style.backgroundColor="#e6e5e4";
					   document.getElementById("fylt_apvw0"+j).style.height=document.body.clientHeight - 140 +"px";
					   }
					   else
					   {
						   document.getElementById("fylt_apv0"+j).style.display="none";
						   document.getElementById("fylt_cw0"+j).style.backgroundColor="";
						   }
				   }

			  }
		  function onm_hiddenm02c(n2)
		  {
			  // document.getElementById("fylt_apv0"+n2).style.display="none";
			  }
		  function onc_hiddenm02c(n3)
		  {
			   document.getElementById("fylt_apv0"+n3).style.display="none";
               document.getElementById("fylt_cw0"+n3).style.backgroundColor="";
			  }

//放映时间 影院影片 下拉页面切换			  
function onc_m02c()
  {
	 document.getElementById("m02l_cte01").style.display="none"; 
	 document.getElementById("m02l_cte02").style.display="block"; 
	 document.getElementById("m02_lm01").className="m02l_me02";
	 document.getElementById("m02_lm02").className="m02l_me01";
	 document.getElementById("m02_right01").style.display="none";
	 document.getElementById("m02_right02").style.display="block";
	  }
	  function onc_m02c2()
  {
	 document.getElementById("m02l_cte01").style.display="block"; 
	 document.getElementById("m02l_cte02").style.display="none"; 
	 document.getElementById("m02_lm01").className="m02l_me01";
	 document.getElementById("m02_lm02").className="m02l_me02";
	 document.getElementById("m02_right01").style.display="block";
	 document.getElementById("m02_right02").style.display="none";
	  }