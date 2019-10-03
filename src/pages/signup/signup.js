import React from 'react';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  notification 
} from 'antd';

import './signup.scss';
import CustomButton from '../../components/custom-button/custom-button';

const { Option } = Select;

// const SignUp = () => (
//   <div>
//     <div> <center><h1> Registration for Business </h1> </center>  </div>
//     <div></div>
//   </div>
// )

// export default SignUp;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        notification['success']({
          message: 'Successfully Registered',
          description:
            'Please check your email for the confirmation',
        });
      }
    });
    this.props.form.resetFields();
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 8 }
      },
    };
    const submitItemLayout = {
      labelCol: {
        xs: { span: 16 },
      },
      wrapperCol: {
        xs: { span: 16 }
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '62',
    })(
      <Select style={{ width: 70 }}>
        <Option value="62">+62</Option>
      </Select>,
    );

    return (
      <div className='form-register'>
        <div className='title'><center><h1> Registration for Business </h1> </center> </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label={`Full Name`}>
              {getFieldDecorator(`name`)
                (
                  <Input />
                )
              }
            </Form.Item>
            <Form.Item label={`Type of Business`}>
              {getFieldDecorator(`businessType`)
                (
                  <Input  />
                )
              }
            </Form.Item>
            <Form.Item label={`Company Name`}>
              {getFieldDecorator(`companyName`)
                (
                  <Input />
                )
              }
            </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Phone Number">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I hereby to term and conditions. All data will be saved privately only for S Fund internally use
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item {...submitItemLayout}>
            <CustomButton right type='submit' htmlType='submit' inverted> Submit </CustomButton>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const SignUp = Form.create({ name: 'register' })(RegistrationForm);

export default SignUp;
