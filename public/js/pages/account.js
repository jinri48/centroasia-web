$(document).ready(function(){ 

    if(!isLogin()){ 
        window.location.href = url+"page-not-accessible";
    }
 	
 	getSalesHistory();
});



function getSalesHistory(){
	postRequest('order/sales_history',{token:readCookie('token')},function(response){
		if(response.success == false){
			showSuccess(response.message);
			$('#tbl_body').empty();
			$('#tbl_body').text('Nothing to show.');
			return;
		} 
		//console.log(response);
		var sales_order = response.data;
		sales_order.forEach((item)=>{
			//console.log(item);
			var status = '';
			var item_stat = item.STATUS; 
			if(item_stat == null || item_stat.trim() == ''){
				status = 'Pending';
			}else if(item_stat == 'A' || item_stat == 'a'){
				status = 'Approved';
			}else if(item_stat == 'C' || item_stat == 'c'){
				status = 'Cancelled';
			}else if (item_stat == 'S' || item_stat == 's'){
				status = 'Served / Completed';
			}else if (item_stat == 'I' || item_stat == 'i'){
				status = 'Invoiced / Delivered';
			}else{
				status = 'undefined status';
			}

			$('#tbl_body').append(
				'<tr>'+
			      '<th scope="row"><a href="/sales_order?id='+item.ORDNUM+'" style="text-decoration:none; color:green;">'+item.ORDNUM+'</a></th>'+
			      '<td style="text-align:right; padding-right:25px;">'+item.NETAMOUNT+'</td>'+
			      '<td>'+item.CREATED_AT+'</td>'+
			      '<td>'+status+'</td>'+
			    '</tr>'
			);
			
		});
	});
}