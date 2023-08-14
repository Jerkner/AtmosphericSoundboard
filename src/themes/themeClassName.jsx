export const themeClassName = (themeComponent) => {
    if (themeComponent === 'Amazon') {
        return 'amazon';
    } else if (themeComponent === 'Harbor') {
        return 'harbor';
    } else if (themeComponent === 'ZenGarden') {
        return 'zengarden';
    } else if (themeComponent === 'Park') {
        return 'park';
    }
    // Add more conditions for other theme components if needed
    return '';
};
