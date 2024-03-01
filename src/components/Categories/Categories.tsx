interface CategoryType{
    id: string,
    name: 'all' | 'technology' | 'engineering' | 'business' | 'environment' | 'marketing' | 'journalism' | 'architecture' | 'education' | 'health' | 'industry' | 'design' | 'graphic_computing' | 'public_management',
    label: string
}

export const categories: CategoryType[] = [
    {
        id: '0',
        name: 'all',
        label: 'Tudo'
    },
    {
        id: '1',
        name: 'technology',
        label: 'Tecnologia'
    },
    {
        id: '2',
        name: 'engineering',
        label: 'Engenharia'
    },
    {
        id: '3',
        name: 'business',
        label: 'Gestão e Negócios'
    },
    {
        id: '4',
        name: 'environment',
        label: 'Meio Ambiente'
    },
    {
        id: '5',
        name: 'marketing',
        label: 'Marketing'
    },
    {
        id: '6',
        name: 'journalism',
        label: 'Jornalismo'
    },
    {
        id: '7',
        name: 'architecture',
        label: 'Arquitetura'
    },
    {
        id: '8',
        name: 'education',
        label: 'Educação'
    },
    {
        id: '9',
        name: 'health',
        label: 'Saúde'
    },
    {
        id: '10',
        name: 'industry',
        label: 'Indústria'
    },
    {
        id: '11',
        name: 'design',
        label: 'Design'
    },
    {
        id: '12',
        name: 'graphic_computing',
        label: 'Computação Gráfica'
    },
    {
        id: '13',
        name: 'public_management',
        label: 'Administração Pública'
    },
]