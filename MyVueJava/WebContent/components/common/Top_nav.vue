<template>
	<div class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand" href="#"><span style="font-weight:bold">
           <i class="fa fa-2x fa-fw fa-pencil-square text-success"></i>TIS
          </span></router-link>
        </div>
        <div class="collapse navbar-collapse" id="navbar-ex-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active">
              <router-link to="/">Home</router-link>
            </li>
            <li>  
              <router-link to="/">SignUp</router-link>
            </li>
            <li>  
              <router-link to="/">SignIn</router-link>
            </li>
            <li>  
              <router-link to="/">Board</router-link>
            </li>
            <li>  
              <router-link to="/">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>