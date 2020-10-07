<template>
  <section
    class="w-full nav-bar min-w-full max-w-screen-xl top-0 fixed z-50 flex flex-row justify-start items-center shadow-xl h-16"
  >
    <header
      class="w-full bg-transparent flex flex-row justify-start items-center w-11/12 mx-auto max-w-screen-xl h-full"
    >
      <div class="h-full flex flex-row items-center justify-start w-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="20">
          <text
            transform="translate(22)"
            fill="#979595"
            font-size="20"
            font-family="SitkaText, Sitka Text"
            text-decoration="line-through"
          >
            <tspan x="0" y="15">IAmGitau</tspan>
          </text>
          <g
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M8 13.882L1 8.941 8 4" stroke="#dbdbdb" />
            <path d="M11 4l7 4.941-7 4.941" stroke="#3428af" />
          </g>
        </svg>
      </div>
      <nav class="flex h-full w-full flex-row items-center justify-start">
        <ul class="flex w-full flex-row items-center justify-start space-x-6">
          <li>
            <nuxt-link class="link" to="/articles"> articles </nuxt-link>
          </li>
          <li>
            <nuxt-link class="link" to="/who"> who ?</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link" to="mailto:qwartypa@gmail.com"
              >contact</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <div class="w-full h-full flex flex-row justify-start items-center">
        <form class="w-full">
          <label class="w-full h-16">
            <input
              id="search"
              type="text"
              name="search"
              class="h-full bg-gray-600 bg-opacity-50"
              placeholder="Search article..."
            />
          </label>
        </form>
      </div>
      <div
        class="flex flex-row space-x-6 text-gray-400 opacity-75 items-center justify-end h-full"
      >
        <!--     Pixar   -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          width="40px"
          height="40px"
        >
          <path
            fill="none"
            stroke="#4788c7"
            stroke-miterlimit="10"
            d="M23.445 8.275L11.679 20 9.07 26.786 14.393 31.911 18.494 29.117 18.494 28.566 14.393 25.429 18.506 20.311 18.506 13.214"
          />
          <path
            fill="#4788c7"
            d="M15 32L14.014 31.585 17.237 27.845 19 29zM14 32H15V36H14z"
          />
          <path
            fill="#b6dcfe"
            d="M6.5,38.5V37c0-0.827,0.673-1.5,1.5-1.5h13c0.827,0,1.5,0.673,1.5,1.5v1.5H6.5z"
          />
          <path
            fill="#4788c7"
            d="M21 36c.551 0 1 .449 1 1v1H7v-1c0-.551.449-1 1-1H21M21 35H8c-1.105 0-2 .895-2 2v2h17v-2C23 35.895 22.105 35 21 35L21 35zM12 24L12 20 9 26 9 27 10 27 15 25 15 24z"
          />
          <path fill="#4788c7" d="M17.429 21L12 21 12 20 19 20z" />
          <path
            fill="#b6dcfe"
            d="M24.01,15.822c-1.778-1.921-1.77-3.311-1.761-4.907c0.01-1.765,0.022-3.764-2.649-6.435 c-0.112-0.112-0.122-0.381-0.023-0.701c0.134-0.437,0.451-0.926,0.868-1.344c0.691-0.69,1.371-0.936,1.744-0.936 c0.096,0,0.226,0.016,0.301,0.091c2.431,2.432,4.25,2.635,5.764,2.635c0.24,0,0.478-0.006,0.714-0.013 c0.226-0.006,0.451-0.012,0.677-0.012c1.142,0,2.388,0.13,3.997,1.609l-4.324,5.696L24.01,15.822z"
          />
          <path
            fill="#4788c7"
            d="M22.188,1.997c2.42,2.397,4.344,2.729,6.065,2.729c0.245,0,0.487-0.006,0.728-0.013 c0.221-0.006,0.442-0.012,0.663-0.012c0.999,0,2.01,0.101,3.317,1.178l-4.006,5.277l-4.888,3.974 c-1.333-1.592-1.326-2.769-1.318-4.213c0.011-1.85,0.023-3.946-2.741-6.737c-0.004-0.187,0.158-0.759,0.79-1.392 C21.377,2.21,21.947,2,22.188,2V1.997 M22.188,1c-0.604,0-1.408,0.393-2.097,1.082c-0.993,0.993-1.371,2.225-0.845,2.752 c4.948,4.948,0.153,7.097,4.722,11.666l5.71-4.643l4.63-6.099c-1.83-1.83-3.26-2.057-4.665-2.057 c-0.462,0-0.921,0.024-1.391,0.024c-1.535,0-3.183-0.261-5.41-2.488C22.682,1.076,22.454,1,22.188,1L22.188,1z"
          />
          <path
            fill="#dff0fe"
            d="M25.629,16.5c-0.678,0-1.208-0.187-1.576-0.554c-1.332-1.332-0.191-4.723,2.489-7.403 C28.42,6.666,30.653,5.5,32.371,5.5c0.678,0,1.208,0.187,1.576,0.554c1.332,1.332,0.191,4.723-2.489,7.403 C29.58,15.334,27.347,16.5,25.629,16.5z"
          />
          <path
            fill="#4788c7"
            d="M32.371,6L32.371,6c0.54,0,0.952,0.137,1.222,0.407c0.47,0.47,0.537,1.395,0.186,2.539 c-0.423,1.378-1.373,2.855-2.675,4.157C29.344,14.863,27.195,16,25.63,16c-0.541,0-0.952-0.137-1.222-0.407 c-0.47-0.47-0.537-1.395-0.186-2.539c0.423-1.378,1.373-2.855,2.675-4.157C28.656,7.137,30.805,6,32.371,6 M32.37,5 c-1.779,0-4.15,1.158-6.181,3.189c-2.927,2.927-4.041,6.558-2.489,8.11c0.475,0.475,1.145,0.7,1.93,0.7 c1.779,0,4.15-1.158,6.181-3.189c2.927-2.927,4.041-6.558,2.489-8.11C33.825,5.225,33.155,5,32.37,5L32.37,5z"
          />
          <path
            fill="#dff0fe"
            d="M32.371,6c-1.566,0-3.715,1.137-5.474,2.897c-1.302,1.302-2.252,2.778-2.675,4.157 c-0.351,1.144-0.283,2.07,0.186,2.539C24.678,15.863,25.089,16,25.63,16c1.565,0,3.714-1.137,5.474-2.897 c1.302-1.302,2.252-2.778,2.675-4.157c0.351-1.144,0.283-2.07-0.186-2.539C33.322,6.137,32.911,6,32.371,6z"
          />
          <path
            fill="#b6dcfe"
            d="M24.574,12.158C25.249,12.678,26.084,13,27,13c2.206,0,4-1.794,4-4c0-0.916-0.322-1.751-0.842-2.426 c-1.092,0.501-2.242,1.302-3.262,2.322C25.872,9.921,25.078,11.051,24.574,12.158z"
          />
          <path
            fill="#fff"
            d="M25.051,11.264C25.576,11.716,26.252,12,27,12c1.657,0,3-1.343,3-3c0-0.749-0.285-1.426-0.739-1.952 c-0.809,0.482-1.621,1.105-2.365,1.848C26.148,9.645,25.534,10.452,25.051,11.264z"
          />
        </svg>

        <!--    Rss Feed    -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-rss"
        >
          <path d="M4 11a9 9 0 0 1 9 9"></path>
          <path d="M4 4a16 16 0 0 1 16 16"></path>
          <circle cx="5" cy="19" r="1"></circle>
        </svg>

        <!--      Github  -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-github"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path>
        </svg>
        <!--     Twitter   -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-twitter"
        >
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
          ></path>
        </svg>
      </div>
    </header>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

// NavBar...
export default Vue.extend({
  name: 'NavBar',
})
</script>

<style scoped>
.nav-bar {
  background-color: #e3e3e3;
}

.link {
  @apply text-green-300;
}

.dark-mode .link {
  @apply capitalize text-white text-lg font-semibold py-2 px-3 transition-colors duration-300 rounded-sm;
}

.dark-mode .link:active {
  @apply opacity-75;
}

.dark-mode .link:hover {
  @apply bg-gray-600 bg-opacity-50 text-white;
}

.dark-mode .nav-bar {
  background-color: #212020;
}
</style>
