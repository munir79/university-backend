import express from 'express';
import cors from 'cors';
import globalErrorHandelar from './src/middleware/globalerrorHandelar.js';
import notFound from './src/middleware/notfound.js';
import { FacultyRouter } from './src/modules/faculty/faculty.route.js';
import { DepartmnetRoute } from './src/modules/department/department.route.js';
import { SemistartRoute } from './src/modules/semistar/semistar.route.js';

const app =express();

// middleware 

app.use(cors());
app.use(express.json());


// application route 
app.use('/api/v1/faculty',FacultyRouter);
app.use('/api/v1/departmet',DepartmnetRoute);
app.use('/api/v1/semistar',SemistartRoute)


// global error Handelar 
app.use(globalErrorHandelar);
//  not found 

app.use(notFound)

export default app;
