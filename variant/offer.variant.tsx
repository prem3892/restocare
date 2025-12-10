import { OfferType } from '@/types/offer.type';
import { LayoutGrid, MessageSquare, Database, ShoppingCart } from 'lucide-react';

export const OfferData: OfferType[] = [
  {
    icon: <LayoutGrid className="w-6 h-6 text-red-600" />,
    title: 'Est facilisis necessitatibus ea',
    content: 'Ex audiam inermis elaboraret eam, oratio petentium ne cum, mundi interesset sit no.',
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-red-600" />,
    title: 'Vim iudico iisque te',
    content:
      'At cibo possim impetus pro, ius id mutat commodo offendit. Cum inani pertinax definitiones ad.',
  },
  {
    icon: <Database className="w-6 h-6 text-red-600" />,
    title: 'Sea inani viris at',
    content:
      'Et eos atomorum urbanitas accommodare, in suscipit petentium vis. Pro ea nibh praesent postulant.',
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-red-600" />,
    title: 'Error nihil primis sit ut',
    content:
      'Eu vis urbanitas scripserit, civibus scripserit pro id. Omnes congue contentiones te eos.',
  },
];
