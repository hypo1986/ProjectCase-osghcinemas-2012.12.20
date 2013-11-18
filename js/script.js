
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
	
	
	
function onb_inputlo(f)
{
	var oid=document.getElementById(f);
	oid.className="login2_inp02";
	if(oid.value == "")
	{
	oid.value="邮箱/手机号";
	}
	}
function onf_inputlo(f2)
{
	var oid2=document.getElementById(f2);
	oid2.className="login2_inp01";
	if(oid2.value == "邮箱/手机号")
	{
	oid2.value="";
	}
}

function onb_inputlo2(d)
{
	var oid=document.getElementById(d);
	oid.className="login2_inp02";
	if(oid.value == "")
	{
	oid.value="密码";
	}
	}
	
function onf_inputlo2(d2)
{
	var oid2=document.getElementById(d2);
	oid2.className="login2_inp01";
	if(oid2.value == "密码")
	{
	oid2.value="";
	}
}
	
	
	
	function onb_input3(e)
{
	var oid=document.getElementById(e);
	oid.className="so_input01";
	if(oid.value == "")
	{
	oid.value="请输入关键词";
	}
	}
	
	
function onf_input3(e2)
{
	var oid2=document.getElementById(e2);
	oid2.className="so_input02";
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

function onb_input6(g)
{
	var oid=document.getElementById(g);
	oid.className="reg_input01";
	}
function onf_input6(g2)
{
	var oid2=document.getElementById(g2);
	oid2.className="reg_input02";
}

function onb_input7(g)
{
	var oid=document.getElementById(g);
	oid.className="reg_input_yzm01";
	}
function onf_input7(g2)
{
	var oid2=document.getElementById(g2);
	oid2.className="reg_input_yzm02";
}

function onb_input8(g)
{
	var oid=document.getElementById(g);
	oid.className="reg_input_nm01";
	}
function onf_input8(g2)
{
	var oid2=document.getElementById(g2);
	oid2.className="reg_input_nm02";
}


	function onb_input9(e)
{
	var oid=document.getElementById(e);
	//oid.className="login_input03";
	if(oid.value == "")
	{
	oid.value="商品名称，订单号...";
	}
	}
	
	
function onf_input9(e2)
{
	var oid2=document.getElementById(e2);
	//oid2.className="login_input04";
	if(oid2.value == "商品名称，订单号...")
	{
	oid2.value="";
	}
}

function onb_input6b(gb)
{
	var oid=document.getElementById(gb);
	oid.className="mob_bdinput";
	}
function onf_input6b(gb2)
{
	var oid2=document.getElementById(gb2);
	oid2.className="mob_bdinputh";
}

function onb_input7b(gb)
{
	var oid=document.getElementById(gb);
	oid.className="mob_bdinput7";
	}
function onf_input7b(gb2)
{
	var oid2=document.getElementById(gb2);
	oid2.className="mob_bdinput7b";
}

function onb_input8b(gb)
{
	var oid=document.getElementById(gb);
	oid.className="mob_bdinput8";
	}
function onf_input8b(gb2)
{
	var oid2=document.getElementById(gb2);
	oid2.className="mob_bdinput8b";
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
				  document.getElementById("so_sel0"+osid).style.color="#ffffff";
				  }
			  }
		  }
		  else
		  {
			   document.getElementById("so_sel0"+osid).value=oval;
			   document.getElementById("so_sel0"+osid).style.color="#ffffff";
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
			 	
			// ev.stopPropagation();
//			 var theId = "so_liapv0"+oinp ;
//		 	$("#" + theId).click( function( ev ) { ev.stopPropagation() ; } ) ;
//			 $(document).one("click", function() {  $("#" + theId).hide() ;  });


document.documentElement.onclick=function(e){
 e=window.event?window.event:e;
 var e_tar=e.srcElement?e.srcElement:e.target;
 //var etest=document.getElementById("so_sel01");
 if(e_tar.id=="so_sel01" || e_tar.id=="so_sel02" || e_tar.id=="so_sel03" || e_tar.id=="so_sel04")
 {
  return;
 }
 else
 {
  document.getElementById("so_liapv01").style.display="none";
  document.getElementById("so_liapv02").style.display="none";
  document.getElementById("so_liapv03").style.display="none";
  document.getElementById("so_liapv04").style.display="none";
 }
}

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
	$2("head_apvlcid").style.display="none";
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
	  
// 用户中心层切换
function onc_usert(f)
{
	for(i=1;i<3;i++)
	if(i==f)
	{
	$2("mobdrb_te0"+i).style.display="block";
	$2("mobdrb_ti0"+i).className="";
	}
	else
	{
	$2("mobdrb_te0"+i).style.display="none";
	$2("mobdrb_ti0"+i).className="mobd_rbzh_tili2";
		}
	}
//帮助中心左侧切换层
function onc_helpc()
  {
	 document.getElementById("help_cte01").style.display="none"; 
	 document.getElementById("help_cte02").style.display="block"; 
	 document.getElementById("help_lm01").className="help_me02";
	 document.getElementById("help_lm02").className="help_me01";
	  }
function onc_helpc2()
  {
	 document.getElementById("help_cte01").style.display="block"; 
	 document.getElementById("help_cte02").style.display="none"; 
	 document.getElementById("help_lm01").className="help_me01";
	 document.getElementById("help_lm02").className="help_me02";
	  }
	  
//弹出层	  
function onc_btnsm(ww,hh,bwin,boverlay,bclose)
{
	var oWin = document.getElementById(bwin);
	var oLay = document.getElementById(boverlay);	
	//var oBtn = document.getElementsByTagName("button")[0];
	//var oBtn = document.getElementById("btnn");
	var oClose = document.getElementById(bclose);
	var oH2 = oWin.getElementsByTagName("h2")[0];
	var bDrag = false;
	var disX = disY = 0;
	//oBtn.onclick = function ()
	//{
		oLay.style.display = "block";
		oWin.style.display = "block";
		//document.body.style.overflow="hidden";
		//document.documentElement.style.overflow = "hidden"
		
		oWin.style.width = ww + "px";
		oWin.style.height = hh + "px";
		oWin.style.left = (document.documentElement.clientWidth - ww) / 2 + "px";
        oWin.style.top = (document.documentElement.clientHeight - hh) / 2 + "px";

	oClose.onclick = function ()
	{
		oLay.style.display = "none";
		oWin.style.display = "none";

	};
	oClose.onmousedown = function (event)
	{
		(event || window.event).cancelBubble = true;
	
	};
	oH2.onmousedown = function (event)
	{		
		var event = event || window.event;
		bDrag = true;
		disX = event.clientX - oWin.offsetLeft;
		disY = event.clientY - oWin.offsetTop;		
		this.setCapture && this.setCapture();		
		return false
	};
	document.onmousemove = function (event)
	{
		if (!bDrag) return;
		var event = event || window.event;
		var iL = event.clientX - disX;
		var iT = event.clientY - disY;
		var maxL = document.documentElement.clientWidth - oWin.offsetWidth;
		var maxT = document.documentElement.clientHeight - oWin.offsetHeight;		
		iL = iL < 0 ? 0 : iL;
		iL = iL > maxL ? maxL : iL; 		
		iT = iT < 0 ? 0 : iT;
		iT = iT > maxT ? maxT : iT;
		
		oWin.style.marginTop = oWin.style.marginLeft = 0;
		oWin.style.left = iL + "px";
		oWin.style.top = iT + "px";		
		return false
	};
	document.onmouseup = window.onblur = oH2.onlosecapture = function ()
	{
		bDrag = false;				
		oH2.releaseCapture && oH2.releaseCapture();
	};
};
//
//通票页面 判断 登录 下拉 框
function onc_tpvalue(tval,tsid)
	  {
		document.getElementById("m03r_diqu0"+tsid).value=tval;
		document.getElementById("tp_liapv0"+tsid).style.display="none";
	  }
function onc_tpapv(tinp)
{
	if(document.getElementById("tp_liapv0"+tinp).style.display=="none")
	{
	  document.getElementById("tp_liapv0"+tinp).style.display="block";
	  
	}
	else
	{
	  document.getElementById("tp_liapv0"+tinp).style.display="none";
		}
		
}
//订单列表 层切换
function onc_mdlb(f)
{
	for(i=1;i<3;i++)
	{
	if(i==f)
	{
	$2("mddlb_list0"+i).style.display="block";
	$2("mdlbl0"+i).className="mddlb_meli1";
	}
	else
	{
	 $2("mddlb_list0"+i).style.display="none";
	 $2("mdlbl0"+i).className="mddlb_meli2";
		}}
	}

//订单列表页层 TD 张开合并

function onc_mdltd(j)
{
  if($2("mddlb_tbd0"+j).style.display=="none")
  {
	$2("mddlb_oni0"+j).src="images/mddlb_jia.jpg";
	$2("mddlb_tbd0"+j).style.display="";
	}
	else
	{
    $2("mddlb_oni0"+j).src="images/mddli_jian.jpg";
	$2("mddlb_tbd0"+j).style.display="none";
		}
}

function onc_mdltd2(j)
{
  if($2("mddlb_tbd20"+j).style.display=="none")
  {
	$2("mddlb_oni20"+j).src="images/mddlb_jia.jpg";
	$2("mddlb_tbd20"+j).style.display="";
	}
	else
	{
    $2("mddlb_oni20"+j).src="images/mddli_jian.jpg";
	$2("mddlb_tbd20"+j).style.display="none";
		}
}
