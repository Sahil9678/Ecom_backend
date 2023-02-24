"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
console.log("port", process.env.PORT);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT)
        .then(() => {
        console.log(`successfully stared on port,${process.env.PORT}`);
    })
        .catch((error) => {
        console.log(error);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map