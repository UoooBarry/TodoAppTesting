"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const items_1 = __importDefault(require("./routes/items"));
const database_1 = __importDefault(require("./config/database"));
const app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: false
}));
app.use(cookie_parser_1.default());
app.use(cors_1.default());
//catch database connection
database_1.default.once('open', function () {
    console.log("Database connected successfully.");
});
app.use('/api/items', items_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(http_errors_1.default(404));
});
// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    // render the error page
    res.json(err);
});
app.listen(3000, () => console.log('Server in running on port 3000...'));
exports.default = app;
