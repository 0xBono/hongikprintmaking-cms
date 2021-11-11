import { Typography, Input, Button, Space } from 'antd';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import router from 'next/router';

export const Auth = () => {
  const { Title } = Typography;

  const { handleSubmit, setValue } = useForm();

  const onSubmit = (data: any) => {
    const convertEmailFormat = data.email + '@gmail.com';
    axios
      .post('http://localhost:5000/auth', {
        email: convertEmailFormat,
      })
      .then((res) => {
        if (res.data) {
          localStorage.setItem('hongik-user-token', res.data.token);
          router.push('/workspace');
        }
      })
      .catch(() => {
        alert('허용되지 않은 사용자입니다.');
      });
  };
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Space
        direction="vertical"
        style={{
          justifyContent: 'center',
        }}
      >
        <Title level={3}>
          홍익대학교 판화과
          <br />
          관리자 페이지
        </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Space
            direction="vertical"
            style={{
              justifyContent: 'center',
            }}
          >
            <Input
              addonAfter="gmail.com"
              placeholder="이메일을 입력해주세요."
              onChange={(e) => setValue('email', e.target.value)}
            />
            <Button htmlType="submit" type="primary" block>
              로그인
            </Button>
          </Space>
        </form>
      </Space>
    </div>
  );
};
