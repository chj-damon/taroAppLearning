import { View } from '@tarojs/components';
import { Form, Cell, Button, Input } from '@taroify/core';

import useShareModelService from './useShareModelService';
import { Fragment } from 'react';
import Container from 'components/Container';

export default function Index() {
  return (
    <Container>
      <useShareModelService.Provider>
        <TestForm />
      </useShareModelService.Provider>
    </Container>
  );
}

function TestForm() {
  const { onSubmit, formRef } = useShareModelService.useModel();

  return (
    <Form onSubmit={onSubmit} ref={formRef}>
      <Cell.Group inset>
        <Form.Item name="username" rules={[{ required: true, message: '请填写用户名' }]}>
          <Form.Label>用户名</Form.Label>
          <Form.Control>
            <Input placeholder="用户名" />
          </Form.Control>
        </Form.Item>
        <PasswordInput />
      </Cell.Group>
      <View style={{ margin: '16px' }}>
        <Button shape="round" block color="primary" formType="submit">
          提交
        </Button>
      </View>
    </Form>
  );
}

const PasswordInput = () => {
  const { validatePassword } = useShareModelService.useModel();
  return (
    <Fragment>
      <Form.Item name="password" rules={[{ required: true, message: '请填写密码' }]}>
        <Form.Label>密码</Form.Label>
        <Form.Control>
          <Input password placeholder="密码" />
        </Form.Control>
      </Form.Item>
      <Button shape="round" block color="primary" onClick={validatePassword}>
        校验密码
      </Button>
    </Fragment>
  );
};
