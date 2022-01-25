<template>
  <div id="app">
    <div
      class="navbar navbar-light navbar-expand-lg"
      style="background-color: #e3f2fd"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <!--<a class="nav-link active" aria-current="page" href="#">Home</a>-->
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/procesocacao" class="nav-link"
                >Proceso del cacao</router-link
              >
            </li>
            <li class="nav-item">
              <!--<a class="nav-link" href="#">Link</a>-->
              <router-link to="/graficos" class="nav-link"
                >Gráficos</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view class="container" />
  </div>
</template>
