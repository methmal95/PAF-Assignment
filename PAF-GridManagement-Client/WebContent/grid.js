
var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNTU5MTU3MjEwLCJleHAiOjE1NTk3NjIwMTB9.oXHw-S4fPIFcLZMCfaXrpX-SvjLTpkkSY7hmiyb3lGyjkqNGxIMusdPPPOi00v6Jtf7axkqfnF3rjkHWzwIbXg";

function getDetails(){
	jQuery.ajax({
        url: "http://localhost:8080/PowerGridManagement/PowerGridService/PowerGrids",
        type: "GET",
        contentType: "application/json", 
        headers: {"Authorization": "Bearer " + token},        
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            
        	var items = [];
        	
        	$.each(data, function(key, val){
        		items.push("<tr>");
        		items.push("<td>" + val.id + "</td>");
                items.push("<td>" + val.source + "</td>");
        		items.push("<td>" + val.area + "</td>");
        		items.push("<td>" + val.gridCode + "</td>");
        		items.push("<td>" + val.output + "</td>");
        		items.push("<td>" + val.station + "</td>");
                items.push("<td>" + val.operator + "</td>");
                items.push("<td>" + val.engineer + "</td>");
        		items.push("<tr>");
        	});
        	$("<tbody/>", {html: items.join("")}).appendTo("#all_grids");

        }, 
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#gridCode").text("Sorry! Grid not found!");
        		$("#area").text("");
        },
        timeout: 120000,
    });
};

function getDetailsById(){
	jQuery.ajax({
        url: "http://localhost:8080/PowerGridManagement/PowerGridService/PowerGrids/" + parseInt($("#grid_id").val()),
        type: "GET",
        contentType: "application/json", 
        headers: {"Authorization": "Bearer " + token},        
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            
        	var items = [];
        	
        	
        		items.push("<tr>");
        		items.push("<td>" + val.id + "</td>");
                items.push("<td>" + val.source + "</td>");
        		items.push("<td>" + val.area + "</td>");
        		items.push("<td>" + val.gridCode + "</td>");
        		items.push("<td>" + val.output + "</td>");
        		items.push("<td>" + val.station + "</td>");
                items.push("<td>" + val.operator + "</td>");
                items.push("<td>" + val.engineer + "</td>");
        		items.push("<tr>");
        	
        	$("<tbody/>", {html: items.join("")}).appendTo("#one_grid");

        }, 
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#error_msg").html("<div class=\"alert alert-danger\" role=\"alert\">Grid Not Found!</div>");
        		$("#area").text("");
        },
        timeout: 120000,
    });
};

function addGrids(){
	console.log('addWine');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        headers: {"Authorization": "Bearer " + token},
        url: "http://localhost:8080/PowerGridManagement/PowerGridService/PowerGrids",
        dataType: "json",
        data: AddNewGridformToJSON(),
        success: function(response){
        	$("#pro_add_msg").html("<div class=\"alert alert-success\" role=\"alert\">Grid added successfuly!</div>");
        },
        error: function(jqXHR, textStatus, errorThrown){
        	$("#pro_add_msg").html("<div class=\"alert alert-danger\" role=\"alert\">Something went wrong!</div>");
        }
    });
};

function removeGridById(){
	jQuery.ajax({
        url: "http://localhost:8080/PowerGridManagement/PowerGridService/PowerGrids/" + $("#del_grid_id").val(),
        type: "DELETE",
        contentType: "application/json",  
        dataType:'json',
        headers: {"Authorization": "Bearer " + token},
        success: function(data, textStatus, errorThrown) {
        	$("#pro_del_msg").html("<div class=\"alert alert-success\" role=\"alert\">Grid deleted successfuly!</div>");
        },
        error : function(jqXHR, textStatus, errorThrown) {
        	$("#pro_del_msg").html("<div class=\"alert alert-danger\" role=\"alert\">Something went wrong!</div>");
        },
        timeout: 120000,
    });
};


function AddNewGridformToJSON() {
    return JSON.stringify({
        "source" : $('#power_source').val(),
        "area" : $('#grid_area').val(),
        "gridCode": $('#grid_code').val(),
        "output": $('#grid_output').val(),
        "station" : $('#grid_station').val(),
        "operator" : $('#grid_operator').val(),
        "engineer" : $('#grid_engineer').val()
        
    });
}