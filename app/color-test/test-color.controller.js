(function ()
{
    'use strict';

    function TestController()
    {
        var ctrl = this;
        ctrl.testColor ='';

        ctrl.changeTestColor=  function(color){
           ctrl.testColor=color;
        };

    }

    angular.module('app').controller('TestController', TestController);
})();
