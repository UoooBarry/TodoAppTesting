import express,{Application, Request, Response, NextFunction} from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import createError from 'http-errors';
import logger from 'morgan';
import itemsRouter from './routes/items';
import database from './config/database';

const app:Application= express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(cors());


//catch database connection
database.once('open',function(){
    console.log("Database connected successfully.");
});
  

app.use('/api/items', itemsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});


// error handler
app.use( (err: any, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    // render the error page
    res.json(err);
});

app.listen(3000, () => console.log('Server in running on port 3000...'));

export default app;