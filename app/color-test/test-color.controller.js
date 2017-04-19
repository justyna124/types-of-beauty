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
        ctrl.coloursspring = ['colorspring1', 'colorspring2', 'colorspring3', 'colorspring4','colorspring5','colorspring6','colorspring7', 'colorspring8', 'colorspring9', 'colorspring10'];
        ctrl.colourssummer = ['colorsummer1', 'colorsummer2', 'colorsummer3', 'colorsummer4', 'colorsummer5', 'colorsummer6', 'colorsummer7', 'colorsummer8', 'colorsummer9', 'colorsummer10'];
        ctrl.coloursautumn = ['colorautumn1', 'colorautumn2', 'colorautumn3', 'colorautumn4', 'colorautumn5', 'colorautumn6', 'colorautumn7', 'colorautumn8', 'colorautumn9', 'colorautumn10'];
        ctrl.colourswinter = ['colorwinter1', 'colorwinter2', 'colorwinter3', 'colorwinter4','colorwinter5', 'colorwinter6', 'colorwinter7', 'colorwinter8', 'colorwinter9', 'colorwinter10'];


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
