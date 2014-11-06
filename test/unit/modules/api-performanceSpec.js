/*jshint expr:true */
"use strict";

describe('Unit: Testing AppPerformance module', function () {

    beforeEach(setupPerformanceTesting);

    it('should contain a WebWorkerPoolFactory factory',
        inject(function (WebWorkerPoolFactory) {
            expect(WebWorkerPoolFactory).to.be.an.object;
        })
    );

    /////////////// HELPER FUNCTIONS

    function setupPerformanceTesting() {

        // Generate mock modules and providers
        mockDependencies();

        // Load the module to be tested
        module("AppPerformance");
    }

    function mockDependencies() {

        // mock modules by creating empty ones
        angular.module('AppConfiguration', []);
        angular.module('ngGrid', []);

        // Provide the dependency injector with mock empty objects
        // instead of real ones
        module(function ($provide) {

            $provide.constant('PERFORMANCE_CONFIG', {
                webworker_authorized_workers : []
            });
        });
    }

});
