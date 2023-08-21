import { Router } from 'express';
import {
  readAllcat,
  readcat,
  createCat,
  updateCat,
  updatePartialCat,
  deleteCat,
} from './cats.service';

const router = Router();

router.get('/cats', readAllcat);
router.get('/cats/:id', readcat);
router.post('/cats', createCat);
router.put('/cats/:id', updateCat);
router.patch('/cats/:id', updatePartialCat);
router.delete('/cats/:id', deleteCat);

export default router;
