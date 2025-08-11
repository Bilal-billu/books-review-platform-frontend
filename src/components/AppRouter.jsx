import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routesAdminProtected, routesUnprotected } from "./reusable/routes"
import ProtectedAdminRoute from "./reusable/layout/AdminLayout"
import { Suspense } from "react"
import { Loading } from "./reusable/loading/Loading"
import LoadingSkeleton from "./reusable/loading/LoadingSkeleton";
import Error from "./reusable/error/Error"



const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                {
                  routesUnprotected.map(item => (
                    <Route
                      path={item.path}
                      element = {
                        <Suspense
                          fallback = {
                            <LoadingSkeleton>
                              <Loading />
                            </LoadingSkeleton>
                          }
                        >
                          {
                            item.isDisabled ? (
                              <LoadingSkeleton>
                                <Error />
                              </LoadingSkeleton>
                            ) : (
                              item.page()
                            )
                          }
                        </Suspense>
                      }
                      key={item.path}
                    />
                  ))
                }
          
                <Route
                  path="/admin"
                  element = {
                    <ProtectedAdminRoute />  
                  }
                >
                  {
                    routesAdminProtected.map((item, i) => (
                      <Route
                      path={item.path}
                      element = {
                        <Suspense
                          fallback = {
                            <LoadingSkeleton>
                              <Loading />
                            </LoadingSkeleton>
                          }
                        >
                          {
                            item.isDisabled ? (
                              <LoadingSkeleton>
                                <Error />
                              </LoadingSkeleton>
                            ) : (
                              item.page()
                            )
                          }
                        </Suspense>
                      }
                      key={item.path}
                    />
                    ))
                  }
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default AppRouter