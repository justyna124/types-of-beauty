(function ()
{
    'use strict';

    function TestController()
    {
        var ctrl = this;
        ctrl.testColor = '';
        ctrl.springColor = '';
        ctrl.summerColor = '';
        ctrl.autumnColor = '';
        ctrl.winterColor = '';
        ctrl.coloursspring = ['colorspring1', 'colorspring2', 'colorspring3'];
        ctrl.colourssummer = ['colorsummer1', 'colorsummer2', 'colorsummer3'];
        ctrl.coloursautumn = ['colorautumn1', 'colorautumn2', 'colorautumn3'];
        ctrl.colourswinter = ['colorwinter1', 'colorwinter2', 'colorwinter3'];


        ctrl.changeTestColor = function (color)
        {
            ctrl.testColor = color;
        };

        ctrl.setSeasonColor = function (seasonarg)
        {
            ctrl.season=seasonarg;
        };
    }

    angular.module('app').controller('TestController', TestController);
})();
