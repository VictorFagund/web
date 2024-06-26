import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LoginForm } from './components';

export default function LoginPage() {
  return (
    <div className="item flex flex-1 flex-col items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader className="pb-4">
          <CardTitle>Login</CardTitle>

          <CardDescription>Faça login para entrar no site!</CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
