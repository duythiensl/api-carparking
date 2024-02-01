"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleTaskModule = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const carparks_module_1 = require("../carparks/carparks.module");
const schedule_task_service_1 = require("./schedule-task.service");
let ScheduleTaskModule = class ScheduleTaskModule {
};
exports.ScheduleTaskModule = ScheduleTaskModule;
exports.ScheduleTaskModule = ScheduleTaskModule = __decorate([
    (0, common_1.Module)({
        imports: [schedule_1.ScheduleModule.forRoot(), carparks_module_1.CarparkModule],
        providers: [schedule_task_service_1.ScheduleTaskService],
    })
], ScheduleTaskModule);
//# sourceMappingURL=schedule-task.module.js.map