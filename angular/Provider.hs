import Haste.Foreign

myFunction:: Int -> IO Bool
myFunction _ = return True

main = do
    export "name_of_haskell_function" myFunction
