(function() {

    var app_transform = '';


    var $body = document.body,
        $appContainer = document.querySelector('.app-container'),
        $appContainer_title = $appContainer.querySelector('.app-container__title'),
        $appContainer_body = $appContainer.querySelector('.app-container__body'),
        $apps = document.querySelectorAll('.app');


    var getApp = function(e) {
        var index = getIndex(e.target),
            $app = $apps[index],
            app_title = $app.querySelector('.app__title').innerHTML,
            app_body = $app.querySelector('.app__body').innerHTML;

        $appContainer_title.innerHTML = app_title
        $appContainer_body.innerHTML = app_body

        openApp(e)
    }

    var openApp = function(e) {
        var app_bounding_rect = $appContainer.getBoundingClientRect(),
            tile_bounding_rect = e.target.getBoundingClientRect()
        translateX = tile_bounding_rect.left + 'px',
            translateY = tile_bounding_rect.top + 'px',
            scaleX = tile_bounding_rect.width / app_bounding_rect.width,
            scaleY = tile_bounding_rect.height / app_bounding_rect.height;

        app_transform = "translate3d(" + translateX + "," + translateY + ",0) scale(" + scaleX + ", " + scaleY + ")";
        $appContainer.style.transform = app_transform
        document.body.offsetWidth; // force reflow
        $body.classList.add("-app-open");
        $appContainer.style.transform = "translate3d(0,0,0) scale(1)";
    }

    var closeApp = function(e) {
        $appContainer.addEventListener('transitionend', resetApp, false);
        $appContainer.style.transform = app_transform;
        $body.classList.add("-app-close");
        $body.classList.remove("-app-open");
    }

    var resetApp = function(e) {
        if (e.target === $appContainer) {
            $body.classList.remove("-app-close");
            $appContainer.removeAttribute('style')
            $appContainer.removeEventListener('transitionend', resetApp);
        }
    }

    document.addEventListener('click', function(e) {
        var matches = e.target.matches('.app__tile');
        if (matches) {
            getApp(e)
        }
    }, false);

    document.querySelector('.app-container').addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          closeApp(e);
        }
      });

    document.addEventListener('click', function(e) {
        var matches = e.target.matches('.app-container__dismiss');
        if (matches) {
            closeApp(e);
        }
    }, false);

    // document.addEventListener('scroll'), function(e) {
    //     var cx = window.innerWidth  / 2,
    //         cy = window.innerHeight / 2;
        
    //     $(document).elementFromPoint(cx, cy).hover(
            
    //     );
        
    // }

    var getIndex = function(node) {
        var children = node.parentNode.childNodes;
        var num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] == node) return num;
            if (children[i].nodeType == 1) num++;
        }
        return -1;
    }

})();