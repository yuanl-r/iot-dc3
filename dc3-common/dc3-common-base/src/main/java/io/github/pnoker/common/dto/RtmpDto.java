/*
 * Copyright 2016-present Pnoker All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *      https://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.github.pnoker.common.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.github.pnoker.common.base.Converter;
import io.github.pnoker.common.bean.common.Pages;
import io.github.pnoker.common.model.Rtmp;
import lombok.*;
import lombok.experimental.Accessors;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;

/**
 * Rtmp DTO
 *
 * @author pnoker
 * @since 2022.1.0
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
public class RtmpDto extends Rtmp implements Serializable, Converter<Rtmp> {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Pages page;

    public RtmpDto(boolean autoStart) {
        super.setAutoStart(autoStart);
    }

    @Override
    public void convertDtoToDo(Rtmp rtmp) {
        BeanUtils.copyProperties(this, rtmp);
    }

    @Override
    public void convertDoToDto(Rtmp rtmp) {
        BeanUtils.copyProperties(rtmp, this);
    }
}