let selectedSessions=[]
let selectedExams=[]


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
        let xhr=new XMLHttpRequest()
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
                        selectedSessions=[]
                        for(var i=0;i<obj.length;i++){
                                if(selectedDate==obj[i].session_date){
                                        selectedSessions.push(obj[i].Session_id)
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
                                        '<button id="View_'+obj[i].Session_id+'" class="View" onclick=viewSession('+obj[i].Session_id+')>View</button>'+
                                        '</div>'+
                                        '</div>'+
                                        '</div>'
                                }
                                
                        } 
                }
        }
        let url="http://localhost/project/Student/getAvailableSessions"
        xhr.open("POST",url,true)
        xhr.send()

}

// let httprequest=new XMLHttpRequest()
// httprequest.onreadystatechange=function(){
//         if(httprequest.readyState===4 && httprequest.status===200){

//         }
// }
// let url0="http://localhost/project/Student/getrequests"
// httprequest.open("POST",url0,true)
// httprequest.send()
let xhr1=new XMLHttpRequest()
xhr1.onreadystatechange=function(){
        if(xhr1.readyState===4 && xhr1.status===200){
                console.log(xhr1.responseText)
                let requestedExams=[]
                const obj=JSON.parse(xhr1.responseText)
                for(var i=0;i<obj.length;i++){
                        requestedExams.push(obj[i].exam_id)
                }
                loadAllOtherExams(requestedExams)
        }
}
let link1="http://localhost/project/Student/getAllExamRequests"
xhr1.open("POST",link1,true)
xhr1.send()

let xhr2=new XMLHttpRequest()
xhr2.onreadystatechange=function(){
        if(xhr2.readyState===4 && xhr2.status===200){
                console.log(xhr2.responseText)
                let requestedSessions=[]
                const obj=JSON.parse(xhr2.responseText)
                for(var i=0;i<obj.length;i++){
                        requestedSessions.push(obj[i].session_id)
                }
                console.log(requestedSessions)
                loadAllOthersessions(requestedSessions)
        }
}
let link2="http://localhost/project/Student/getAllSessionRequests"
xhr2.open("POST",link2,true)
xhr2.send()


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
                        selectedExams=[]
                        for(var i=0;i<obj.length;i++){
                                if(selectedDate==obj[i].exam_date){
                                        selectedExams.push(obj[i].Exam_id)
                                        row.innerHTML+='<div class="row">'+
                                        '<div class="cell">'+
                                          '<div class="information">'+
                                            '<div class="one">Ex_'+obj[i].Exam_id+'</div>'+
                                        
                                            '<div class="three">'+obj[i].exam_type+'</div>'+
                                            '<div class="four">'+obj[i].exam_time+'</div>'+
                                          '</div>'+
                                          '<div class="viewButton">'+
                                           '<button id="View_'+obj[i].Exam_id+'" class="View" onclick=viewExam('+obj[i].Exam_id+')>View</button>'+
                                          '</div>'+
                                        '</div>'+
                                      '</div>'
                                }
                               
                        } 
                });

        }
}
let url1="http://localhost/project/Student/getAvailableExams"
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
                        selectedSessions=[]
                        for(var i=0;i<obj.length;i++){
                                if(obj[i].session_date==initDate){
                                        selectedSessions.push(obj[i].Session_id)
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
                                   '<button id="View_'+obj[i].Session_id+'" class="View" onclick=viewSession('+obj[i].Session_id+')>View</button>'+
                                  '</div>'+
                                '</div>'+
                              '</div>'
                                }     
                        } 
                });

                document.getElementById("sessionBtn").addEventListener("click",function(){
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
                                        '<button id="View_'+obj[i].Session_id+'" class="View" onclick=viewSession('+obj[i].Session_id+')>View</button>'+
                                        '</div>'+
                                        '</div>'+
                                        '</div>'
                                }
                                
                        } 
                });

        }
}
let url2="http://localhost/project/Student/getAvailableSessions"
httpreq2.open("POST",url2,true)
httpreq2.send()

function loadAllOtherExams(requestedExams){
        let httpreq3=new XMLHttpRequest()
        httpreq3.onreadystatechange=function(){ 
                if(httpreq3.readyState===4 && httpreq3.status===200){
                        
                        const obj=JSON.parse(httpreq3.responseText)
                        document.getElementById("requestExamBtn").addEventListener("click",function(){
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
                                                if(!requestedExams.includes(obj[i].Exam_id)){
                                                        if(!selectedExams.includes(obj[i].Exam_id)){
                                                                row.innerHTML+='<div class="row">'+
                                                                '<div class="cell">'+
                                                                '<div class="information">'+
                                                                '<div class="one">Ex_'+obj[i].Exam_id+'</div>'+
                                                                
                                                                '<div class="three">'+obj[i].exam_type+'</div>'+
                                                                '<div class="four">'+obj[i].exam_time+'</div>'+
                                                                '</div>'+
                                                                '<div class="viewButton">'+
                                                                '<button id="View_'+obj[i].Exam_id+'" class="View" onclick=viewRequestedExam('+obj[i].Exam_id+')>View</button>'+
                                                                '<button id="Join_'+obj[i].Exam_id+'" class="Join" onclick=requestExam('+obj[i].Exam_id+')>Join</button>'+
                                                                '</div>'+
                                                                '</div>'+
                                                        '</div>'
                                                        }
                                                }else{
                                                        row.innerHTML+='<div class="row">'+
                                                        '<div class="cell">'+
                                                        '<div class="information">'+
                                                        '<div class="one">Ex_'+obj[i].Exam_id+'</div>'+
                                                        
                                                        '<div class="three">'+obj[i].exam_type+'</div>'+
                                                        '<div class="four">'+obj[i].exam_time+'</div>'+
                                                        '</div>'+
                                                        '<div class="viewButton">'+
                                                        '<button id="View_'+obj[i].Exam_id+'" class="View" onclick=viewRequestedExam('+obj[i].Exam_id+')>View</button>'+
                                                        '<p>Requested</p>'+
                                                        '</div>'+
                                                        '</div>'+
                                                '</div>'  
                                                }
                                        
                                        }
                                
                                } 
                        });

                }
        }
        let url3="http://localhost/project/Student/getAllExams"
        httpreq3.open("POST",url3,true)
        httpreq3.send()
}




function loadAllOthersessions(requestedSessions){
        // console.log(requestedSessions[1])
        let httpreq4=new XMLHttpRequest()
        httpreq4.onreadystatechange=function(){
                if(httpreq4.readyState===4 && httpreq4.status===200){
                        console.log(httpreq4.responseText)
                        const obj=JSON.parse(httpreq4.responseText)
                        

                        document.getElementById("requestSessionBtn").addEventListener("click",function(){
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
                                                if(!requestedSessions.includes(obj[i].Session_id)){
                                                        if(!selectedSessions.includes(obj[i].Session_id)){
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
                                                                '<button id="View_'+obj[i].Session_id+'" class="View" onclick=viewSession('+obj[i].Session_id+')>View</button>'+
                                                                '<button id="Join_'+obj[i].Session_id+'" class="Join" onclick=requestSession('+obj[i].Session_id+')>Join</button>'+
                                                                '</div>'+
                                                                '</div>'+
                                                                '</div>'
                                                        }
                                                }else{
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
                                                        '<button id="View_'+obj[i].Session_id+'" class="View" onclick=viewSession('+obj[i].Session_id+')>View</button>'+
                                                        '<p>Requested</p>'+
                                                        '</div>'+
                                                        '</div>'+
                                                        '</div>' 
                                                }
                                        }
                                        
                                } 
                        });

                }
        }
        let url4="http://localhost/project/Student/getAllSessions"
        httpreq4.open("POST",url4,true)
        httpreq4.send()
}

