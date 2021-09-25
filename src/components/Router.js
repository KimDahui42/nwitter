import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

const AppRouter = ({ isLoggedIn }) => {//���� ������Ʈ���� ���� ���ӽ��� ���� ���� �Ҵ����� ���
    //�ڵ� ����� isLoggedIn�� setIsLoggedIn���� �����ϴ� ���·� ���, �ʱ갪�� false, �α��� ���� ������ �� ���
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <Route exact path="/">
                        <Home />
                    </Route>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;