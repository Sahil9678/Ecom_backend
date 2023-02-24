"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT || 3000)
        .then(() => {
        console.log("successfully stared on port 3000");
    })
        .catch((error) => {
        console.log(error);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map