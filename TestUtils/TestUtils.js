export const findComponentAttribute = (component, attribute) => 
{
    const wrapper = component.find(`[test-data='${attribute}']`);
    return wrapper;
}