### Bit.dev 
components from this project are stored on bit.dev

# initialize
- bit init
- bit login

# add components
- bit add src/components/component_name
- bit status

# react compiler
- bit import bit.envs/compilers/react --compiler
- this sets the react compiler as the default compiler for the Bit workspace inside this repo

# bild the component
- with the React compiler, build the component from the added source files
- this makes the component directly consumable for other projects
- makes sure the component is all-inclusive and contains all the parts that are required in order to share it with others
- before building, the component in your project may be consuming dependencies that it needs to work
- 'building' the component will add the necessary dependencies to the component, so it'll work in any environment

# export component
- tag the component: bit tag --all 0.0.1
- tagging the component stages it for export
- bit export <username>.<collection>; e.g. bit export Pioneer18.AnimatedComponents
