/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
function sellerSignup(){
    var frm=document.frm;
    if(frm.name.value==''){
        alert("Please Enter Name");
        frm.name.focus();
    }
    else if(frm.email.value==''){
        alert("Please Enter Valid Email");
        frm.email.focus();
    }
    else{
        var name=frm.name.value;
        var email =frm.email.value;
        var phone=frm.phone.value;
        str='';
        $.ajax({
	  type: "post",
	  dataType: "json",
	  async: true,
	  cache : false,
	  crossDomain: true,
	  //url: "https://aurora.dubailist.com/site/getuserstore/161",
          url: "https://aurora.dubailist.com/sitem/storefrommobile",
	  data: "name="+name+"&email="+email+"&phone="+phone,
	}).fail(function(responseText){ 
            //alert(name);
		alert(responseText);
                console.log(responseText);
		
	})
	.success(function(data){
            //alert(data);
            //alert('login');
            //alert(data);
//            console.log(data);
//            return false;
            user_id=data.user_id;
            if(user_id >0){
                localStorage.user_id_mobile=user_id;
                window.location ='store.html';
            }
            //console.log(data);
            //alert(data.msg);
            return false;
            if(data.msg)
                    alert(data.msg);
            else{
               localStorage.token=data.token;
                window.location ='invoice.html';
            }

	});
       //alert('here');
        //window.location ='store.html';
    }
//    var name=frm.name.value;
//    var str=JSON.stringify($('form').serializeObject());
//    alert(str);
    //alert('Its In Process...');
    
   
    //window.location.replace("store.html");
    

   //return true;
//    $.ajax({
//	  type: "post",
//	  dataType: "json",
//	  async: true,
//	  cache : false,
//	  crossDomain: true,
//	  url: "http://skelectrical.net/namumkin/ws.php",
//	  data: "str="+str,
//	}).fail(function(responseText){ 
//            //alert(name);
//		alert(responseText);
//                console.log(responseText);
//		
//	})
//	.success(function(data){
//            //alert(data);
//            //alert('login');
//            //alert(data);
//            alert(data.msg);
//            return false;
//            if(data.msg)
//                    alert(data.msg);
//            else{
//               localStorage.token=data.token;
//                window.location ='invoice.html';
//            }
//
//	});
        //return false;
}
