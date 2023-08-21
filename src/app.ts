import * as express from 'express';
import catsRouter from './cats/cats.route';

class Server {
  public app: express.Express;

  constructor() {
    const app: express.Express = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddlewares() {
    //* loggin middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log('this is logging middleware');
      next();
    });

    //* json middleware
    this.app.use(express.json());

    this.setRoute();

    this.app.use(catsRouter);

    //* 404 error middleware
    this.app.use((req, res, next) => {
      console.log('this is error middleware');
      res.send({ error: '404 not found error' });
    });
  }

  public listen() {
    this.setMiddlewares();
    this.app.listen(8000, () => {
      console.log(`Listening at http://localhost:8000/`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
