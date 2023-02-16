import { EnteteGrid } from './enteteGrid';
import { Table } from './table';

export const TABLES: Table [] = [
    { id: 1, name: 'Alain', type: 'voyages', job: 'CDP'},
    { id: 2, name: 'Lisa', type: 'ter', job: 'conducteur'},
    { id: 3, name: 'Hugo', type: 'fret', job: 'aiguilleur'},
    { id: 4, name: 'Pierre', type: 'infra', job: 'agent de manoeuvre'},
    { id: 5, name: 'Violette', type: 'VFLI', job: 'infirmière'},
    { id: 6, name: 'Simon', type: 'ECR', job: 'horairiste'}

];

export const ENTETEGRIDS: EnteteGrid [] = [
    {label: 'Identifiant', path: 'id'},
    {label: 'Nom', path: 'name'},
    {label: 'Type', path: 'type'},
    {label: 'Job', path: 'job'}
]    