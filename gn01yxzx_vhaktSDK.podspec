
Pod::Spec.new do |s|

s.name = 'gn01yxzx_vhaktSDK'
s.version = '1.3.6'
s.license = 'MIT'
s.summary = 'An Animate Water view on iOS.'
s.homepage = 'https://github.com/825342680/gn01yxzx_vhaktSDK'
s.authors = { '朱跃龙' => '825342680@qq.com' }
s.source = { :git => 'https://github.com/825342680/gn01yxzx_vhaktSDK.git', :tag => s.version }
s.requires_arc = true
s.ios.deployment_target = '9.0'
s.source_files = 'gn01yxzx_vhaktSDK/**/*.{h,m}'

s.public_header_files = 'gn01yxzx_vhaktSDK/**/*.h'
s.vendored_frameworks = 'gn01yxzx_vhaktSDK/gn01yxzx_vhaktSDK.framework'

s.frameworks   = 'UIKit','AVFoundation','Foundation'

s.xcconfig = {
'VALID_ARCHS' =>  'arm64 x86_64',
}

s.dependency "gn01PublicFileSDK"

end
