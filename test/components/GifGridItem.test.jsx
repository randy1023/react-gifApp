import { render } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe('pruebas <GifGridItem/>', () => { 
    test('Debe hacer el match con el snapshot', () => { 

        render(<GifGridItem/>)
    })
 })
