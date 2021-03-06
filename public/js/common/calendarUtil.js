function getFullDate(date,month,year) {
        if(date<10){
                date="0"+date
        }
        if(month+1<10){
                month="0"+(month+1)
        }else{
                month=month+1
        }
        var day=year+"-"+month+"-"+date
        console.log(day);
        document.getElementById("selectedDateContainer").value=day
        xhr=new XMLHttpRequest()
        xhr.onreadystatechange=function(){
                if(xhr.readyState===4 && xhr.status===200){
                        const obj=JSON.parse(xhr.responseText)

                        var selectedDate=document.getElementById("selectedDateContainer").value

                        let row=document.getElementById("tablerows")
                        let heading=document.getElementById("headingRow")
                        heading.innerHTML=""
                        heading.innerHTML='<div class="cell">'+
                        '<div class="headingDetails">'+
                          '<div class="one">Session Id</div>'+
                          '<div class="two">Title</div>'+
                          '<div class="three">Type</div>'+
                          '<div class="four">Time</div>'+
                        '</div>'+
                      '</div>'
                        row.innerHTML=""
                        for(var i=0;i<obj.length;i++){
                                if(selectedDate==obj[i].session_date){
                                        obj[i].session_title = obj[i].session_title.replace(/-/g, " ");
                                        row.innerHTML+='<div class="row">'+
                                        '<div class="cell">'+
                                        '<div class="information">'+
                                        '<div class="one">SE_'+obj[i].Session_id+'</div>'+
                                        '<div class="two">'+obj[i].session_title+'</div>'+
                                        '<div class="three">'+obj[i].type+'</div>'+
                                        '<div class="four">'+obj[i].session_time+'</div>'+
                                        '</div>'+
                                        '<div class="viewButton">'+
                                        '<button id="View_'+obj[i].Session_id+'" class="View" onclick=editSession('+obj[i].Session_id+')>View</button>'+
                                        '</div>'+
                                        '</div>'+
                                        '</div>'
                                }
                                
                        } 
                }
        }
        let url="http://localhost/project/Manager/getAvailableSessions"
        xhr.open("POST",url,true)
        xhr.send()

}


let httpreq1=new XMLHttpRequest()
httpreq1.onreadystatechange=function(){
        if(httpreq1.readyState===4 && httpreq1.status===200){
                
                const obj=JSON.parse(httpreq1.responseText)

                document.getElementById("examBtn").addEventListener("click",function(){
                        var selectedDate=document.getElementById("selectedDateContainer").value
                        let row=document.getElementById("tablerows")
                        let heading=document.getElementById("headingRow")
                        heading.innerHTML=""
                        heading.innerHTML='<div class="cell">'+
                        '<div class="headingDetails">'+
                          '<div class="one">Exam Id</div>'+
                          '<div class="three">Type</div>'+
                          '<div class="four">Time</div>'+
                        '</div>'+
                      '</div>'
                        row.innerHTML=""
                        for(var i=0;i<obj.length;i++){
                                if(selectedDate==obj[i].exam_date){
                                        row.innerHTML+='<div class="row">'+
                                        '<div class="cell">'+
                                          '<div class="information">'+
                                            '<div class="one">Ex_'+obj[i].Exam_id+'</div>'+
                                        
                                            '<div class="three">'+obj[i].exam_type+'</div>'+
                                            '<div class="four">'+obj[i].exam_time+'</div>'+
                                          '</div>'+
                                          '<div class="viewButton">'+
                                           '<button id="View_'+obj[i].Exam_id+'" class="View" onclick=editExam('+obj[i].Exam_id+')>View</button>'+
                                          '</div>'+
                                        '</div>'+
                                      '</div>'
                                }
                               
                        } 
                });

        }
}
let url1="http://localhost/project/Manager/getAvailableExams"
httpreq1.open("POST",url1,true)
httpreq1.send()



let httpreq2=new XMLHttpRequest()
httpreq2.onreadystatechange=function(){
        if(httpreq2.readyState===4 && httpreq2.status===200){
                console.log(httpreq2.responseText)
                const obj=JSON.parse(httpreq2.responseText)

                window.addEventListener('load',function(){

                        var today=new Date();
                        if(today.getDate()<10){
                                var dateval="0"+today.getDate()
                            }
                            else{
                                var dateval=today.getDate()
                            }
                            if((today.getMonth()+1)<10){
                                var monthval="0"+(today.getMonth()+1)
                            }
                            else{
                                var monthval=today.getMonth()+1
                            }
                            var initDate=today.getFullYear()+"-"+monthval+"-"+dateval
                        document.getElementById("selectedDateContainer").value=initDate
                        console.log("initDate",initDate)


                        let row=document.getElementById("tablerows")
                        let heading=document.getElementById("headingRow")
                        heading.innerHTML=""
                        heading.innerHTML='<div class="cell">'+
                        '<div class="headingDetails">'+
                          '<div class="one">Session Id</div>'+
                          '<div class="two">Title</div>'+
                          '<div class="three">Type</div>'+
                          '<div class="four">Time</div>'+
                        '</div>'+
                      '</div>'
                        row.innerHTML=""
                        for(var i=0;i<obj.length;i++){
                                if(obj[i].session_date==initDate){
                                        obj[i].session_title = obj[i].session_title.replace(/-/g, " ");
                                        row.innerHTML+='<div class="row">'+
                                '<div class="cell">'+
                                  '<div class="information">'+
                                    '<div class="one">SE_'+obj[i].Session_id+'</div>'+
                                    '<div class="two">'+obj[i].session_title+'</div>'+
                                    '<div class="three">'+obj[i].type+'</div>'+
                                    '<div class="four">'+obj[i].session_time+'</div>'+
                                  '</div>'+
                                  '<div class="viewButton">'+
                                   '<button id="View_'+obj[i].Session_id+'" class="View" onclick=editSession('+obj[i].Session_id+')>View</button>'+
                                  '</div>'+
                                '</div>'+
                              '</div>'
                                }     
                        } 
                });

                document.getElementById("sessionBtn").addEventListener("click",function(){
                        // document.getElementById("sessionBtn").classlist.replace("page-change-button","page-change-button-selected")
                        // document.getElementById("examBtn").classlist.replace("page-change-button-selected","page-change-button")
                        var selectedDate=document.getElementById("selectedDateContainer").value

                        let row=document.getElementById("tablerows")
                        let heading=document.getElementById("headingRow")
                        heading.innerHTML=""
                        heading.innerHTML='<div class="cell">'+
                        '<div class="headingDetails">'+
                          '<div class="one">Session Id</div>'+
                          '<div class="two">Title</div>'+
                          '<div class="three">Type</div>'+
                          '<div class="four">Time</div>'+
                        '</div>'+
                      '</div>'
                        row.innerHTML=""
                        for(var i=0;i<obj.length;i++){
                                if(selectedDate==obj[i].session_date){
                                        obj[i].session_title = obj[i].session_title.replace(/-/g, " ");
                                        row.innerHTML+='<div class="row">'+
                                        '<div class="cell">'+
                                        '<div class="information">'+
                                        '<div class="one">SE_'+obj[i].Session_id+'</div>'+
                                        '<div class="two">'+obj[i].session_title+'</div>'+
                                        '<div class="three">'+obj[i].type+'</div>'+
                                        '<div class="four">'+obj[i].session_time+'</div>'+
                                        '</div>'+
                                        '<div class="viewButton">'+
                                        '<button id="View_'+obj[i].Session_id+'" class="View" onclick=editSession('+obj[i].Session_id+')>View</button>'+
                                        '</div>'+
                                        '</div>'+
                                        '</div>'
                                }
                                
                        } 
                });

        }
}
let url2="http://localhost/project/Manager/getAvailableSessions"
httpreq2.open("POST",url2,true)
httpreq2.send()


