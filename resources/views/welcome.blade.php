<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shourcut icon" href="{{asset('images/logo/favicon.png')}}" />

        <title>Pesan Guru</title>
        <link rel="stylesheet" href="{{asset('css/app.css')}}" type="text/css">
    </head>
    <body>

    @include('./partials/navbar')

    @yield('app')
    <script type="text/javascript" src="{{asset('js/app.js')}}"></script>
    </body>
</html>
