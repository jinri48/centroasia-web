@extends('layouts.master')

@section('title', 'My Account')

@section('custom_css')
    <!-- <link rel="stylesheet" type="text/css" href="/css/app.css"> -->
@endsection


@section('content')
<div class="container">
<!-- YOUR PAGE CONTENT HERE -->
    <div style="padding: 25px;">
    	<h4>Order History</h4> 
    	<table class="table table-sm">
		  <thead>
		    <tr>
		      <th scope="col" width="15%">Order ID</th>
		      <th style="text-align:right; padding-right:25px;" scope="col">Amount</th>
		      <th scope="col" width="20%">Date</th>
		      <th scope="col" width="10%">Order Status</th>
		    </tr>
		  </thead>
		  <tbody id="tbl_body">
		     
		  </tbody>
		</table> 
    </div> 
</div>
@endsection

 
@section('custom_js')
    <script src="/js/pages/account.js"></script>
@endsection
