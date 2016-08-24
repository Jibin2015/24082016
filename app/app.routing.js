"use strict";
var router_1 = require("@angular/router");
var register_component_1 = require('./register/register.component');
var appRoutes = [
    { path: "register", component: register_component_1.RegisterComponent },
    { path: "**", redirectTo: '' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map