
		
		
		/* ********************************************************************* */
	
	var s=30
    var m=02
    var r=0;
	var tt=0;
    function T()
    {s-=1;
    if(s<0) s=59,m-=1;
    if(m<0) m=59    
    if(s+m==0)T3()       
    s = s+"";
    m = m+"";
    if (s.length<2) s = "0"+s;
    if (m.length<2) m = "0"+m;
    tm.innerHTML=m+":"+s }        
    function startTimer()
        {if(!r){r=1;T2()}}
    function T2() 
        {if(s+m==0)s=30,m=02;
        tt=setInterval("T()",1000)}             
    function T3()
        {clearInterval(tt);r=0}
	
		
		/* ********************************************************************* */

	var s2=30
    var m2=02
    var r2=0;
	var tt2=0;
    function Ta()
    {s2-=1;
    if(s2<0) s2=59,m2-=1;
    if(m2<0) m2=59    
    if(s2+m2==0)Ta3()       
    s2 = s2+"";
    m2 = m2+"";
    if (s2.length<2) s2 = "0"+s2;
    if (m2.length<2) m2 = "0"+m2;
    tm2.innerHTML=m2+":"+s2 }        
    function startTimer2()
        {if(!r2){r2=1;Ta2()}}
    function Ta2()
        {if(s2+m2==0)s2=30,m2=02;
        tt2=setInterval("Ta()",1000)}             
    function Ta3()
        {clearInterval(tt2);r2=0}
		
		/* ********************************************************************* */
		
	var s3=30
    var m3=02
    var r3=0;
	var tt3=0;
    function Tb()
    {s3-=1;
    if(s3<0) s3=59,m3-=1;
    if(m3<0) m3=59    
    if(s3+m3==0)Tb3()       
    s3 = s3+"";
    m3 = m3+"";
    if (s3.length<2) s3 = "0"+s3;
    if (m3.length<2) m3 = "0"+m3;
    tm3.innerHTML=m3+":"+s3 }        
    function startTimer3()
        {if(!r3){r3=1;Tb2()}}
    function Tb2()
        {if(s3+m3==0)s3=30,m3=02;
        tt3=setInterval("Tb()",1000)}             
    function Tb3()
        {clearInterval(tt3);r3=0}
		
		/* ********************************************************************* */
		
	var s4=30
    var m4=02
    var r4=0;
	var tt4=0;
    function Tc()
    {s4-=1;
    if(s4<0) s4=59,m4-=1;
    if(m4<0) m4=59    
    if(s4+m4==0)Tc3()       
    s4 = s4+"";
    m4 = m4+"";
    if (s4.length<2) s4 = "0"+s4;
    if (m4.length<2) m4 = "0"+m4;
    tm4.innerHTML=m4+":"+s4 }        
    function startTimer4()
        {if(!r4){r4=1;Tc2()}}
    function Tc2()
        {if(s4+m4==0)s4=30,m4=02;
        tt4=setInterval("Tc()",1000)}             
    function Tc3()
        {clearInterval(tt4);r4=0}
		
		/* ********************************************************************* */
		
	var s5=30
    var m5=02
    var r5=0;
	var tt5=0;
    function Td()
    {s5-=1;
    if(s5<0) s5=59,m5-=1;
    if(m5<0) m5=59    
    if(s5+m5==0)Td3()       
    s5 = s5+"";
    m5 = m5+"";
    if (s5.length<2) s5 = "0"+s5;
    if (m5.length<2) m5 = "0"+m5;
    tm5.innerHTML=m5+":"+s5 }        
    function startTimer5()
        {if(!r5){r5=1;Td2()}}
    function Td2()
        {if(s5+m5==0)s5=30,m5=02;
        tt5=setInterval("Td()",1000)}             
    function Td3()
        {clearInterval(tt5);r5=0}
		
		/* ********************************************************************* */
		
	var s6=00
    var m6=05
    var r6=0;
	var tt6=0;
    function Tf()
    {s6-=1;
    if(s6<0) s6=59,m6-=1;
    if(m6<0) m6=59    
    if(s6+m6==0)Tf3()       
    s6 = s6+"";
    m6 = m6+"";
    if (s6.length<2) s6 = "0"+s6;
    if (m6.length<2) m6 = "0"+m6;
    tm6.innerHTML=m6+":"+s6 }        
    function startTimer6()
        {if(!r6){r6=1;Tf2()}}
    function Tf2()
        {if(s6+m6==0)s6=00,m6=05;
        tt6=setInterval("Tf()",1000)}             
    function Tf3()
        {clearInterval(tt6);r6=0}
	
		/* ********************************************************************* */
		
	var s7=00
    var m7=05
    var r7=0;
	var tt7=0;
    function Te()
    {s7-=1;
    if(s7<0) s7=59,m7-=1;
    if(m7<0) m7=59    
    if(s7+m7==0)Te3()       
    s7 = s7+"";
    m7 = m7+"";
    if (s7.length<2) s7 = "0"+s7;
    if (m7.length<2) m7 = "0"+m7;
    tm7.innerHTML=m7+":"+s7 }        
    function startTimer7()
        {if(!r7){r7=1;Te2()}}
    function Te2()
        {if(s7+m7==0)s7=00,m7=05;
        tt7=setInterval("Te()",1000)}             
    function Te3()
        {clearInterval(tt7);r7=0}
		
		/* ********************************************************************* */
		
	function T4() {
		clearInterval(tt);r=0;s=30;m=02;tm.innerHTML="0"+m+":"+s;
		clearInterval(tt2);r2=0;s2=30;m2=02;tm2.innerHTML="0"+m2+":"+s2;
		clearInterval(tt3);r3=0;s3=30;m3=02;tm3.innerHTML="0"+m3+":"+s3;
		clearInterval(tt4);r4=0;s4=30;m4=02;tm4.innerHTML="0"+m4+":"+s4;
		clearInterval(tt5);r5=0;s5=30;m5=02;tm5.innerHTML="0"+m5+":"+s5;
		clearInterval(tt6);r6=0;s6=00;m6=05;tm6.innerHTML="0"+m6+":"+"0"+s6;
		clearInterval(tt7);r7=0;s7=00;m7=05;tm7.innerHTML="0"+m7+":"+"0"+s7;}