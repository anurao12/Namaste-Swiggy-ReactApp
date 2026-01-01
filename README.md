# swiggy Food ordering plan

# * Header
 *    - logo
 *    - nav items
# * Body
 *    - search
 *    - RestaurantContainer
 *      - restaurantCard
 *          - img
 *          - Name of Res, star rating, Cuisine, delevery time
# * Footer
 *     - copyright
 *     - links
 *     - Address
 *     - Contact

# Two types of export/import

# -Default export/import
-----------------------------
 export default Component
 import Component from 'path'


 # -Named Export/import
--------------------------
 export const Component
 import {Component} from 'path'

 # React Hooks

# Normal Js Utility Function
---------------------------------
- useEffect()
- useState() = maintain state variable in react component 

------------------------------------------------------------------------------
# React 
    - Recoinciliation algorithm also known as fiber
    - virtual DOm - representation of actual DOM (basically React element)
 i.e., react element that object is a virtual DOM

 JSX converts to react create element which is object

 Actual DOM is what u see in the inspect element

    - diff Algorithm => finds the difference between 2 virtual DOM then it will update the actual DOM


# Monolith Architecture

    - every service is in one project

# microservice Architecture
    - UI service
    - notification service
    - backend service
    - Auth service
    - DB service

    
